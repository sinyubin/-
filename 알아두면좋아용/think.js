const getMeal = (meal) => {
  if (meal === "한식") return "불고기";
  if (meal === "양식") return "파스타";
  if (meal === "중식") return "짜장면";
  if (meal === "일식") return "초밥";
  return "굶기";
};

console.log(getMeal("한식"));
//불고기

//간단하게 하는 법
const meal = {
  한식: "불고기",
  중식: "짜장면",
  일식: "초밥",
  양식: "파스타",
};

const eatMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log(eatMeal("한식"));

//불고기
