@echo off
break ON
rem fichiers BAT créé par Sébastien CANET
SET currentpath=%~dp1
cd %currentpath%App\Blockly@rduino
cls
start index.html
exit /b