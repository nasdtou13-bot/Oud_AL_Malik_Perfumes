@echo off
echo ===================================================
echo   Oud Al Malik Perfumes - Haute Parfumerie Server
echo ===================================================
echo.
echo Starting local web server on http://localhost:3000 ...
echo Close this window to stop the server.
echo.

where python >nul 2>nul
if %errorlevel% equ 0 (
    start http://localhost:3000
    python -m http.server 3000
    goto end
)

if exist "%LOCALAPPDATA%\Programs\Mu Editor\Python\python.exe" (
    start http://localhost:3000
    "%LOCALAPPDATA%\Programs\Mu Editor\Python\python.exe" -m http.server 3000
    goto end
)

echo Opening index.html directly in your default browser...
start index.html

:end
