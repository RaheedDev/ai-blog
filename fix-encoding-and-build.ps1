# PowerShell script to fix encoding issues and run build
Write-Host "Fixing potential encoding issues..." -ForegroundColor Yellow

# Check if Node.js is available
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js not found in PATH. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if npm is available
try {
    $npmVersion = npm --version
    Write-Host "npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "npm not found in PATH." -ForegroundColor Red
    exit 1
}

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Try to build
Write-Host "Running build..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "Build successful!" -ForegroundColor Green
} catch {
    Write-Host "Build failed. Error details above." -ForegroundColor Red
    exit 1
}