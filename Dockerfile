# See https://devblogs.microsoft.com/dotnet/improving-multiplatform-container-support/
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base

# Create non-root user and group with fixed UID/GID 1000
RUN groupadd -g 1000 appgroup && useradd -u 1000 -g appgroup -m appuser

WORKDIR /app

EXPOSE 5047
EXPOSE 7221

FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG TARGETARCH
WORKDIR /src

# copy csproj and restore as distinct layers
COPY ["iGotify Notification Assist.csproj", "."]
RUN dotnet restore "./iGotify Notification Assist.csproj" -a $TARGETARCH

# copy everything else and build app
COPY . .
WORKDIR "/src/."
RUN dotnet build "./iGotify Notification Assist.csproj" -c Release -a $TARGETARCH -o /app/build

FROM build AS publish
RUN dotnet publish "./iGotify Notification Assist.csproj" -c Release -a $TARGETARCH -o /app/publish

# final stage/image
FROM base AS final
COPY --from=publish /app/publish .

# Ensure appuser owns the app directory
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

ENTRYPOINT ["dotnet", "iGotify Notification Assist.dll"]

