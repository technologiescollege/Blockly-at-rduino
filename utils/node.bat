@echo off
break ON
rem fichier BAT créé par Sébastien CANET
cls
SET currentpath=%~dp1
cd %currentpath%
start .\nodejs\node.exe xi.js ard null 0 COM6 1234