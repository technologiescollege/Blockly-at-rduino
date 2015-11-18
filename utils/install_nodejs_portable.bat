@ECHO OFF
SETLOCAL EnableDelayedExpansion
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: ::
:: Node.js Portable ::
:: ::
:: A DOS Batch script to make Node.js portable on Windows systems. ::
:: ::
:: Copyright (C) 2013-2014 Cr@zy <webmaster@crazyws.fr> ::
:: Francisation et rajout modules pour Xi : Sébastien Canet ::
:: ::
:: Node.js Portable is free software; you can redistribute it and/or modify ::
:: it under the terms of the GNU Lesser General Public License as published by ::
:: the Free Software Foundation, either version 3 of the License, or ::
:: (at your option) any later version. ::
:: ::
:: Node.js Portable is distributed in the hope that it will be useful, ::
:: but WITHOUT ANY WARRANTY; without even the implied warranty of ::
:: MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the ::
:: GNU Lesser General Public License for more details. ::
:: ::
:: You should have received a copy of the GNU Lesser General Public License ::
:: along with this program. If not, see http://www.gnu.org/licenses/. ::
:: ::
:: Related post: http://goo.gl/gavL4 ::
:: Usage: nodejs-portable.bat ::
:: ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
TITLE Node.js Portable
:: Settings
SET nodejsVersion=0.10.29
SET nodejsArch=x86
:: Batch vars (no edits necessary)
SET nodejsTask=%1
SET nodejsPath=%~dp0
SET npmPath=%nodejsPath%\npm
SET nodejsPath=!nodejsPath:~0,-1!
rem SET nodejsWork=%nodejsPath%\work
SET npmGlobalConfigFilePath=%npmPath%\npmrc
SET nodejsInstallVbs=%TEMP%\nodejs_install.vbs
SET nodejsMsiPackage=node-v%nodejsVersion%-%nodejsArch%.msi
IF %nodejsArch%==x64 SET nodejsUrl=http://nodejs.org/dist/v%nodejsVersion%/x64/%nodejsMsiPackage%
IF %nodejsArch%==x86 SET nodejsUrl=http://nodejs.org/dist/v%nodejsVersion%/%nodejsMsiPackage%
:: Check if the menu selection is provided as a command line parameter
IF NOT "%nodejsTask%"=="" GOTO ACTION
::::::::::::::::::::::::::::::::::::::::
:MENU
::::::::::::::::::::::::::::::::::::::::
CLS
ECHO.
ECHO Installation de Node.js en mode Portable
ECHO inspire de Node.js Portable v1.7
ECHO https://github.com/crazy-max/nodejs-portable
ECHO.
ECHO Attention, l'installation va se faire dans le dossier courant.
ECHO.
ECHO 1 - Installation de node.js
ECHO 2 - Installation des modules
ECHO 9 - Sortie
ECHO.
SET /P nodejsTask=Choisissez une tache : 
ECHO.
::::::::::::::::::::::::::::::::::::::::
:ACTION
::::::::::::::::::::::::::::::::::::::::
IF %nodejsTask% == 1 GOTO INSTALL
IF %nodejsTask% == 2 GOTO MODULES
IF %nodejsTask% == 9 GOTO EXIT
GOTO MENU
::::::::::::::::::::::::::::::::::::::::
:INSTALL
::::::::::::::::::::::::::::::::::::::::
:: Check if node.js is installed
IF EXIST "%nodejsPath%\node.exe" ECHO node.js est deja installe... && GOTO EOF
:: Relocate and create temp dir (workaround for permission issue)
SET TEMP=%nodejsPath%\tmp
IF NOT EXIST "%TEMP%" MKDIR "%TEMP%"
:: Prepare cscript to download node.js
ECHO WScript.StdOut.Write "Telechargement de " ^& "%nodejsUrl%" ^& " ">%nodejsInstallVbs%
:: Switched to 'WinHttp.WinHttpRequest.5.1'
ECHO dim http: set http = createobject("WinHttp.WinHttpRequest.5.1") >>%nodejsInstallVbs%
ECHO dim bStrm: set bStrm = createobject("Adodb.Stream") >>%nodejsInstallVbs%
:: Open in asynchronous mode.
ECHO http.Open "GET", "%nodejsUrl%", True >>%nodejsInstallVbs%
ECHO http.Send >>%nodejsInstallVbs%
:: Every second write a '.' until the download is complete
ECHO while http.WaitForResponse(0) = 0 >>%nodejsInstallVbs%
ECHO WScript.StdOut.Write "." >>%nodejsInstallVbs%
ECHO WScript.Sleep 1000 >>%nodejsInstallVbs%
ECHO wend >>%nodejsInstallVbs%
:: ECHO WScript.StdOut.Write vbCRLF >>%nodejsInstallVbs%
:: Write the HTTP status code onto console
ECHO WScript.StdOut.WriteLine " [HTTP " ^& http.Status ^& " " ^& http.StatusText ^& "]" >>%nodejsInstallVbs%
ECHO with bStrm >>%nodejsInstallVbs%
ECHO .type = 1 '//binary >>%nodejsInstallVbs%
ECHO .open >>%nodejsInstallVbs%
ECHO .write http.responseBody >>%nodejsInstallVbs%
ECHO .savetofile "%TEMP%\%nodejsMsiPackage%", 2 >>%nodejsInstallVbs%
ECHO end with >>%nodejsInstallVbs%
:: Download latest version in the current folder
cscript.exe /NoLogo %nodejsInstallVbs%
:: Extract the MSI package
ECHO Installation de node.js dans %nodejsPath%...
msiexec /a "%TEMP%\%nodejsMsiPackage%" /qn TARGETDIR="%nodejsPath%"
:: Clean folders
RMDIR /s /q "%TEMP%"
IF EXIST "%nodejsPath%\%nodejsMsiPackage%" DEL "%nodejsPath%\%nodejsMsiPackage%"
:: Finish installation
ECHO.
IF EXIST "%nodejsPath%\nodejs\node.exe" ECHO node.js installe avec succes dans le dossier '%nodejsPath%\nodejs'
IF EXIST "%nodejsPath%\nodejs\node.exe" PAUSE
IF NOT EXIST "%nodejsPath%\nodejs\node.exe" ECHO Une erreur a eu lieu pendant l'installation.
IF NOT EXIST "%nodejsPath%\nodejs\node.exe" PAUSE
IF NOT EXIST "%nodejsPath%\nodejs\node.exe" GOTO EXIT
GOTO PREPARE
::::::::::::::::::::::::::::::::::::::::
:MODULES
::::::::::::::::::::::::::::::::::::::::
ECHO "Installation des modules dans nodejs"
call %nodejsPath%\nodejs\npm install --prefix %nodejsPath% johnny-five --save
rem call %nodejsPath%\nodejs\npm install --prefix %nodejsPath% socket.io --save
echo "!!!! Installation Complete !!!"
echo
GOTO MENU
::::::::::::::::::::::::::::::::::::::::
:PREPARE
::::::::::::::::::::::::::::::::::::::::
:: Relocate and edit NPM global config file
ECHO prefix = %nodejsPath%\ >%npmGlobalConfigFilePath%
ECHO globalconfig = %npmPath%\npmrc >>%npmGlobalConfigFilePath%
ECHO globalignorefile = %npmPath%\npmignore >>%npmGlobalConfigFilePath%
ECHO init-module = %npmPath%\init.js >>%npmGlobalConfigFilePath%
ECHO cache = %npmPath%\cache >>%npmGlobalConfigFilePath%
IF NOT EXIST "%nodejsWork%" MKDIR "%nodejsWork%"
IF NOT EXIST "%npmPath%\npmignore" ECHO. 2>"%npmPath%\npmignore"
IF NOT EXIST "%npmPath%\init.js" ECHO. 2>"%npmPath%\init.js"
IF NOT EXIST "%npmPath%\cache" MKDIR "%npmPath%\cache"
RMDIR /s /q "%nodejsPath%\node_modules"
IF %nodejsTask% == 1 SET nodejsTask=0 && GOTO MENU
GOTO EOF
::::::::::::::::::::::::::::::::::::::::
:EOF
::::::::::::::::::::::::::::::::::::::::
ECHO.
PAUSE
GOTO MENU
::::::::::::::::::::::::::::::::::::::::
:EXIT
::::::::::::::::::::::::::::::::::::::::
ENDLOCAL