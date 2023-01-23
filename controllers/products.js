// Import products model
import Products from "../models/Products.js";

// Exports all products
export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Exports certain product
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);

    if (product) {
      return res.json(product);
    }

    res.status(404).json({ message: "Product not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Creates product
export const createProduct = async (req, res) => {
  try {
    const product = new Products(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Updates product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByIdAndUpdate(id, req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Deletes product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Products.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Product deleted!");
    }

    throw new Error("Product not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
