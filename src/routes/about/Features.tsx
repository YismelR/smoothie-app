export function Features() {
  return (
    <div className="s-phone:grid s-phone:gap-4 s-phone:place-items-center">
      <h2 className="s-phone:text-xl font-semibold">Features</h2>
      <div className="s-phone:grid s-phone:gap-4">
        <div className="s-phone:grid s-phone:gap-4 bg-grey-lightCard s-phone:p-4 s-phone:rounded-2xl shadow-cardShadow">
          <h3 className="font-medium">Customizable Recipes</h3>
          <p className="s-phone:text-sm">
            Tailor your smoothie bowls to your taste and dietary preferences
            with our extensive library of customizable recipes. Choose from a
            variety of fruits, vegetables, superfoods, nuts, seeds, and granola
            options to create your perfect blend.
          </p>
        </div>
        <div className="s-phone:grid s-phone:gap-4 bg-grey-lightCard s-phone:p-4 s-phone:rounded-2xl shadow-cardShadow">
          <h3 className="font-medium">Shopping List</h3>
          <p className="s-phone:text-sm">
            Simplify your grocery shopping with our integrated shopping list
            feature. Add ingredients from your favorite recipes with a single
            tap, and never miss an essential item again.
          </p>
        </div>
        <div className="s-phone:grid s-phone:gap-4 bg-grey-lightCard s-phone:p-4 s-phone:rounded-2xl shadow-cardShadow">
          <h3 className="font-medium">Nutritional Information</h3>
          <p className="s-phone:text-sm">
            Stay informed about what you’re consuming with detailed nutritional
            breakdowns for each recipe. Track your intake of calories, vitamins,
            minerals, and macronutrients effortlessly.
          </p>
        </div>
        <div className="s-phone:grid s-phone:gap-4 bg-grey-lightCard s-phone:p-4 s-phone:rounded-2xl shadow-cardShadow">
          <h3 className="font-medium">Seasonal and Local Ingredients</h3>
          <p className="s-phone:text-sm">
            Enjoy the freshest ingredients by accessing recipes that highlight
            seasonal and locally sourced produce. Support local farmers and
            reduce your carbon footprint while enjoying peak flavor and
            nutrition.
          </p>
        </div>
      </div>
    </div>
  );
}
