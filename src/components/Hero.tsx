import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IRecipes } from "../types";
import Recipies from "./Recipies";

const Hero: FC = () => {
  const [data, setData] = useState<null | IRecipes[]>(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes").then((res) => {
      setData(res.data.recipes);
    });
  }, []);

  return (
    <div>
      <Recipies recepies={data} />
    </div>
  );
};

export default Hero;
