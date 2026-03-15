@echo off
setlocal enabledelayedexpansion

:: Cambiar la codificación de la consola a UTF-8
chcp 65001 >nul

:: Ruta raíz del proyecto
set "root_dir=."

:: Archivo de salida
set "output_file=output.txt"

:: Borrar el archivo de salida si ya existe
if exist "%output_file%" del "%output_file%"

:: Lista de extensiones a omitir (video, imágenes, vectores, CSS)
set "skip_extensions=.mp4 .avi .mkv .mov .jpg .jpeg .png .gif .bmp .svg .ico .webp .md .bat .txt"

:: Lista de archivos ya procesados para evitar duplicados
set "processed_files="

:: Función para recorrer directorios y archivos
call :list_files "%root_dir%"

goto :eof

:list_files
set "dir_path=%~1"
echo Recorriendo directorio: %dir_path% >> "%output_file%"

:: Recorre todos los archivos en el directorio actual y subdirectorios
for /r "%dir_path%" %%f in (*) do (
    :: Omitir carpetas ocultas y archivos dentro de .git
    set "file_path=%%f"
    set "hidden=%%~af"
    
    if "!hidden:~0,1!" neq "h" (
        if /i "!file_path:.git\=!"=="!file_path!" (
            :: Obtener la extensión del archivo
            set "ext=%%~xf"

            :: Verificar si la extensión está en la lista de omisión
            set "skip=0"
            for %%e in (%skip_extensions%) do (
                if /i "%%e"=="!ext!" set "skip=1"
            )

            if !skip! equ 0 (
                :: Verificar si el archivo ya ha sido procesado
                echo "!processed_files!" | findstr /i /c:"!file_path!" >nul
                if errorlevel 1 (
                    :: Verificar si el archivo es de texto (omitir binarios)
                    set "is_text=1"
                    type "%%f" >nul 2>&1 || set "is_text=0"

                    if !is_text! equ 1 (
                        :: Mostrar el nombre del archivo en la terminal
                        echo [PROCESANDO] Archivo: %%f

                        :: Escribir en el archivo de salida
                        echo. >> "%output_file%"
                        echo Archivo: %%f >> "%output_file%"
                        echo Contenido: >> "%output_file%"
                        type "%%f" >> "%output_file%"
                        echo. >> "%output_file%"

                        :: Marcar archivo como procesado
                        set "processed_files=!processed_files!|%%f"
                    ) else (
                        echo [OMITIDO] Archivo binario: %%f
                    )
                ) else (
                    echo [DUPLICADO] Archivo ya procesado: %%f
                )
            ) else (
                echo [OMITIDO] Archivo no válido: %%f (Extensión: !ext!)
            )
        ) else (
            echo [OMITIDO] Archivo en .git: %%f
        )
    )
)

goto :eof

:eof
endlocal
