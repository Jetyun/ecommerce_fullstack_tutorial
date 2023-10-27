import { useState } from "react";
import Product from "@/components/product";
import { initMongoose } from "../../lib/mongoose";
import { findAllProducts } from "./api/product";
import Layout from "@/components/layout";
export default function Home({products}) {
  const [phrase, setPhrase] = useState("");

  const categoryNames = [...new Set(products.map((p) => p.category))];
  if (phrase) {
    products = products.filter((p) =>
      p.name.toLowerCase().includes(phrase)
    );
  } 
  return (
    <Layout>
      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="search-for-product"
        className="w-full px-4 py-2 text-black bg-grey-100 rounded-xl"
      />
      {categoryNames.map((c) => (
        <div key={c}>
          {products.find((p) => p.category === c) && (
            <div>
              <h2 className="text-2xl capitalize">{c}</h2>
              <div className="flex gap-2 snap-x ">
                {products
                  .filter((p) => p.category === c)
                  .map((productInfo) => (
                    <Product key={productInfo._id} {...productInfo} />
                  ))}
              </div>
            </div>
          )}
        </div>
      ))}
      </Layout>
  );
}


export async function getServerSideProps(){
  await initMongoose()
  const products=await findAllProducts()
  return{
    props:{
      products: JSON.parse(JSON.stringify(products))
      
    }

  }
  
}