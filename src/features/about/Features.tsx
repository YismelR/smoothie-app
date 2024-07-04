export function Features() {
  return (
    <div className="s-phone:grid s-phone:gap-4 s-phone:place-items-center md-tablet:gap-8 md-tablet:place-items-start">
      <h2 className="s-phone:text-xl font-semibold md-tablet:text-2xl md-desktop:text-3xl lg-desktop:text-4xl">
        Features
      </h2>
      <div className="s-phone:grid s-phone:gap-4 md-phone:gap-8 md-tablet:grid-cols-2 md-laptop:gap-12 md-desktop:gap-16">
        <div className="s-phone:grid s-phone:gap-4 bg-grey-lightCard s-phone:p-4 s-phone:rounded-2xl shadow-cardShadow md-laptop:p-12">
          <h3 className="font-medium text-lg md-desktop:text-xl lg-desktop:text-3xl">
            Customizable Recipes
          </h3>
          <p className="s-phone:text-sm lg-phone:text-base md-desktop:text-lg lg-desktop:text-2xl">
            Tailor your smoothie bowls to your taste and dietary preferences
            with our extensive library of customizable recipes. Choose from a
            variety of fruits, vegetables, superfoods, nuts, seeds, and granola
            options to create your perfect blend.
          </p>
        </div>
        <div className="s-phone:grid s-phone:gap-4 bg-grey-lightCard s-phone:p-4 s-phone:rounded-2xl shadow-cardShadow md-laptop:p-12">
          <h3 className="font-medium text-lg md-desktop:text-xl lg-desktop:text-3xl">
            Shopping List
          </h3>
          <p className="s-phone:text-sm lg-phone:text-base md-desktop:text-lg lg-desktop:text-2xl">
            Simplify your grocery shopping with our integrated shopping list
            feature. Add ingredients from your favorite recipes with a single
            tap, and never miss an essential item again.
          </p>
        </div>
        <div className="s-phone:grid s-phone:gap-4 bg-grey-lightCard s-phone:p-4 s-phone:rounded-2xl shadow-cardShadow md-laptop:p-12">
          <h3 className="font-medium text-lg md-desktop:text-xl lg-desktop:text-3xl">
            Nutritional Information
          </h3>
          <p className="s-phone:text-sm lg-phone:text-base md-desktop:text-lg lg-desktop:text-2xl">
            Stay informed about what you’re consuming with detailed nutritional
            breakdowns for each recipe. Track your intake of calories, vitamins,
            minerals, and macronutrients effortlessly.
          </p>
        </div>
        <div className="s-phone:grid s-phone:gap-4 bg-grey-lightCard s-phone:p-4 s-phone:rounded-2xl shadow-cardShadow md-laptop:p-12">
          <h3 className="font-medium text-lg md-desktop:text-xl lg-desktop:text-3xl">
            Seasonal and Local Ingredients
          </h3>
          <p className="s-phone:text-sm lg-phone:text-base md-desktop:text-lg lg-desktop:text-2xl">
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
