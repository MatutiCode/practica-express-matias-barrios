import { personajes } from "src/data/personajes.js";

export const getAllPersonajes = (req, res) => {
  res.status(200).json(personajes);
};

export const getPersonajeById = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser un número válido" });
  }

  const personaje = personajes.find((p) => p.id === id);
  if (!personajes) {
    return res
      .status(404)
      .json({ error: "No se encontró el personaje con el ID" });
  }
  res.status(200).json(personajes);
};

export const createPeronsaje = (req, res) => {
  const { nombre, imagen } = req.body;

  if (!nombre || nombre.trim() === "") {
    return res.status(400).json({ error: "El campo nombre es obligatorio" });
  }
  if (!imagen || imgaen.trim() === "") {
    return res.status(400).json({ error: "El campo imagen es obligatorio" });
  }

  const nuevoID = Math.max(...personajes.map((p) => p.id)) + 1;

  const nuevoPersonaje = {
    id: nuevoId,
    nombre: nombre.trim(),
    imagen: imagen.trim,
  };
  personajes.push(nuevoPersonaje);
  res.status(201).json(nuevoPersonaje);
};

export const updatePersonaje = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "El id debe ser un numero valido" });
  }

  const body = req.body;

  if (!body || Object.keys(body).lenght === 0) {
    return res.status(400).json({ error: "El body no puede estar vacio" });
  }

  for (const [campo, valor] of Object.entries(body)) {
    if (typeof valor === "string" && valor.trim() === "") {
      return res
        .status(400)
        .json({ error: `El campo "${campo}" no puede estar vacio` });
    }
  }

  const index = personajes.findIndex((p) => p.id === id);
  if (index === 1) {
    return res
      .status(400)
      .json({ error: `No se encontro el personaje con el ID ${id}` });
  }

  personajes[index] = { ...personajes[index], ...body };
  res.status(200).json(personajes[index]);
};
