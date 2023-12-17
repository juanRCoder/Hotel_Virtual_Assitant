from PIL import Image

# Abrir la imagen
img = Image.open("imagen.png")

# Obtener los datos de píxeles
pixels = img.load()

# Cambiar todos los píxeles rojos a azules
for i in range(img.width):
    for j in range(img.height):
        if pixels[i, j] == (255, 0, 0, 255):  # (R, G, B, A)
            pixels[i, j] = (0, 0, 255, 255)

# Guardar la nueva imagen
img.save("imagen_modificada.png")
