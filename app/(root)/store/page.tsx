'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";

const StoresPage = () => {
  const [stores, setStores] = useState([
    { id: 1, name: "TechStore", description: "Selling the latest tech gadgets", products: ["Laptop", "Smartphone", "Headphones"] },
    { id: 2, name: "FashionHub", description: "The latest fashion trends", products: ["T-shirts", "Jeans", "Jackets"] },
  ]);
  
  const [creatingStore, setCreatingStore] = useState(false);
  const [newStoreName, setNewStoreName] = useState("");
  const [newStoreDescription, setNewStoreDescription] = useState("");
  const [newStoreProduct, setNewStoreProduct] = useState("");
  
  const createStore = () => {
    const newStore = {
      id: stores.length + 1,
      name: newStoreName,
      description: newStoreDescription,
      products: [newStoreProduct],
    };
    setStores([...stores, newStore]);
    setCreatingStore(false);
    setNewStoreName("");
    setNewStoreDescription("");
    setNewStoreProduct("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Stores</h1>

      <div className="mb-4">
        <Button className="bg-green-500 text-white" onClick={() => setCreatingStore(true)}>
          Create Your Store
        </Button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Available Stores</h2>
        <div className="space-y-4">
          {stores.map(store => (
            <div key={store.id} className="border p-4 rounded mb-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{store.name}</h3>
                <p>{store.description}</p>
                <h4 className="mt-2">Products:</h4>
                <ul className="list-disc ml-5">
                  {store.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {creatingStore && (
        <div className="mt-4 border p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">Create Your Store</h2>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              placeholder="Store Name"
              value={newStoreName}
              onChange={(e) => setNewStoreName(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              placeholder="Store Description"
              value={newStoreDescription}
              onChange={(e) => setNewStoreDescription(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              placeholder="First Product"
              value={newStoreProduct}
              onChange={(e) => setNewStoreProduct(e.target.value)}
            />
            <Button className="bg-blue-500 text-white" onClick={createStore}>
              Create Store
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoresPage;