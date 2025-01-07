import { FC, useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux";
import { savedRecept } from "../redux/slices/saved-slices";
import { IRecipes } from "../types";

interface IRecipiesProps {
  recepies: IRecipes[] | null;
}

const Recipies: FC<IRecipiesProps> = ({ recepies }) => {
  const [loading, setLoading] = useState(true);
  const saved = useSelector((state: RootState) => state.saved.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Loading holatini boshqarish
    const timer = setTimeout(() => setLoading(false), 1000); // Simulyatsiya uchun 1 soniya kutish
    return () => clearTimeout(timer); // Tozalash
  }, [recepies]);

  if (loading) {
    return (
      <div className="flex items-start justify-center min-h-screen">
        <div className="text-green-500 text-2xl font-semibold pt-4">Loading...</div>
      </div>
    );
  }

  const resepiseItems = recepies?.map((recept: IRecipes) => (
    <div
      key={recept.id}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
    >
      {/* Recipe Image */}
      <img
        className="w-full h-[300px] sm:h-[350px] object-cover cursor-pointer"
        src={recept.image}
        alt={recept.name}
        onClick={() => navigate(`/recipes/${recept.id}`)}
      />
      {/* Recipe Name */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-green-600">{recept.name}</h2>
      </div>
      {/* Save Button */}
      <button
        onClick={() => dispatch(savedRecept(recept))}
        className="absolute top-3 right-3 text-3xl text-green-400 hover:text-green-600 transition-colors duration-300"
        aria-label={`${
          saved?.some((item) => item.id === recept.id)
            ? "Unsave Recipe"
            : "Save Recipe"
        }`}
      >
        {saved?.some((item) => item.id === recept.id) ? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </div>
  ));

  return (
    <div className="container px-4 py-6">
      {resepiseItems?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {resepiseItems}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          No recipes found.
        </div>
      )}
    </div>
  );
};

export default Recipies;
