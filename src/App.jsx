import { useState } from "react";
import axios from "axios";

const App = () => {

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    mealPreference: "",
    startDate: "",
  });
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const owners = [
    { name: "Vivek Tripathi", phone: "8889248664" },
    { name: "Siddhant Rai", phone: "9244845690" },
    { name: "Raj Rai", phone: "9131979334" },
  ];

  const selectedPrice =
    form.mealPreference === "Both" ? 2499 : 1499;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.mealPreference) {
      setErrorMessage("Please select your meal preference.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "https://rasoi-server.onrender.com/post",
        form
      );

      if (res.status === 201) {
        setShowSuccess(true);

        setForm({
          name: "",
          mobile: "",
          address: "",
          mealPreference: "",
          startDate: "",
        });
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle =
    "w-full min-w-0 border border-gray-200 bg-gray-50 rounded-xl px-4 py-3.5 text-sm sm:text-base outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100";

  const labelStyle =
    "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fffaf5]">

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

          <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-9 text-center shadow-2xl">

            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">

              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>

            </div>

            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              Registration Successful!
            </h2>

            <p className="text-gray-500 mt-3 text-sm sm:text-base leading-7">
              Thank you for choosing VSR Rasoi.
              Your tiffin registration has been
              successfully submitted.
            </p>

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mt-6">

              <p className="text-orange-700 font-semibold text-sm">
                🍱 Welcome to VSR Rasoi!
              </p>

              <p className="text-gray-500 text-xs mt-2">
                Our team will contact you soon regarding your tiffin service.
              </p>

            </div>

            <button
              onClick={() => setShowSuccess(false)}
              className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition"
            >
              Continue →
            </button>

          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="bg-white border-b border-orange-100 sticky top-0 z-50 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center gap-3">

          <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">

            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-orange-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-2xl sm:text-3xl">🍱</span>
            </div>

            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl font-black text-gray-900 tracking-wide">
                VSR <span className="text-orange-600">RASOI</span>
              </h1>

              <p className="text-[8px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] font-bold text-gray-500">
                TASTE OF HOME
              </p>
            </div>

          </a>

          <div className="flex items-center gap-2 sm:gap-4">

            <a
              href="#plans"
              className="hidden sm:block text-gray-600 hover:text-orange-600 font-semibold text-sm"
            >
              Our Plans
            </a>

            <a
              href="#contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition whitespace-nowrap"
            >
              Contact Us
            </a>

          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">

          <div className="text-center md:text-left">

            <span className="inline-block bg-orange-100 text-orange-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-5 sm:mb-6">
              🍲 Fresh • Homemade • Delicious
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Ghar Jaisa
              <span className="text-orange-600"> Khana,</span>
              <br />
              Har Din!
            </h2>

            <p className="text-gray-600 mt-5 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-lg max-w-xl mx-auto md:mx-0">
              Ab roz ghar jaisa tasty, fresh aur hygienic
              khana enjoy karein. VSR Rasoi lekar aaya hai
              aapke liye homemade food aur affordable
              monthly tiffin service.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-8">

              <a
                href="#register"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3.5 sm:py-4 rounded-xl font-bold shadow-lg shadow-orange-200 transition text-center"
              >
                Order Your Tiffin →
              </a>

              <a
                href="#plans"
                className="border-2 border-orange-200 text-orange-700 px-6 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-orange-50 transition text-center"
              >
                View Plans
              </a>

            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-9 sm:mt-10">

              {[
                ["100%", "Homemade Taste"],
                ["Fresh", "Daily Preparation"],
                ["Clean", "Food Preparation"],
              ].map((item, index) => (

                <div key={index} className="text-center md:text-left">

                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    {item[0]}
                  </h3>

                  <p className="text-[10px] sm:text-sm text-gray-500 mt-1">
                    {item[1]}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* HERO IMAGE CARD */}
          <div className="relative px-2 sm:px-4 md:px-0">

            <div className="bg-gradient-to-br from-orange-200 via-orange-100 to-yellow-50 rounded-3xl sm:rounded-[35px] p-8 sm:p-12 lg:p-14 text-center shadow-lg">

              <div className="text-8xl sm:text-[130px] lg:text-[150px]">
                🍛
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-orange-800 mt-5">
                VSR Special Thali
              </h3>

              <p className="text-orange-700 mt-3 text-sm sm:text-base font-medium">
                Freshly Prepared With Love ❤️
              </p>

              <div className="flex justify-center gap-4 sm:gap-5 text-3xl sm:text-4xl mt-7">
                🫓 🍚 🥗
              </div>

            </div>

            <div className="absolute -bottom-4 left-0 sm:-bottom-5 sm:-left-2 bg-white shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3">

              <span className="text-3xl sm:text-4xl">🍱</span>

              <div>
                <p className="font-bold text-gray-800 text-sm sm:text-base">
                  Daily Tiffin
                </p>

                <p className="text-[10px] sm:text-xs text-gray-500">
                  Ghar Ka Swaad
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">

          {[
            ["🥗", "Fresh Food", "Freshly prepared meals"],
            ["🏠", "Homemade Taste", "Feel like home"],
            ["🧼", "Hygienic Kitchen", "Clean food preparation"],
            ["🚚", "Doorstep Delivery", "Convenient delivery"],
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white border border-orange-100 rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-lg transition"
            >

              <div className="text-3xl sm:text-4xl mb-3">
                {item[0]}
              </div>

              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                {item[1]}
              </h3>

              <p className="text-[10px] sm:text-xs text-gray-500 mt-2">
                {item[2]}
              </p>

            </div>

          ))}

        </div>
      </section>

      {/* PRICING */}
      <section id="plans" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

        <div className="text-center mb-9 sm:mb-12">

          <span className="text-orange-600 font-bold tracking-widest text-xs sm:text-sm">
            OUR PRICING
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3">
            Choose Your Tiffin Plan
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Affordable monthly homemade food plans.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">

          {/* ONE MEAL */}
          <div className="bg-white border border-orange-200 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition">

            <div className="text-4xl sm:text-5xl mb-5">
              🍱
            </div>

            <p className="text-orange-600 font-bold tracking-widest text-xs sm:text-sm">
              ONE TIME MEAL
            </p>

            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4">
              ₹1,499
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Per Month
            </p>

            <div className="mt-7 sm:mt-8 space-y-4 text-gray-700 text-sm sm:text-base">
              <p>✓ Choose Lunch or Dinner</p>
              <p>✓ Freshly Prepared Meals</p>
              <p>✓ Homemade Food Experience</p>
              <p>✓ Hygienic Preparation</p>
            </div>

            <a
              href="#register"
              className="block text-center mt-8 border-2 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white py-3.5 sm:py-4 rounded-xl font-bold transition"
            >
              Choose One Meal
            </a>

          </div>

          {/* BOTH MEALS */}
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">

            <span className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white text-orange-700 text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-2 rounded-full">
              BEST VALUE
            </span>

            <div className="text-4xl sm:text-5xl mb-5">
              🍛
            </div>

            <p className="text-orange-100 font-bold tracking-widest text-xs sm:text-sm">
              FULL MEAL PLAN
            </p>

            <h2 className="text-4xl sm:text-5xl font-black mt-4">
              ₹2,499
            </h2>

            <p className="text-orange-100 mt-2 text-sm">
              Per Month
            </p>

            <div className="mt-7 sm:mt-8 space-y-4 text-sm sm:text-base">
              <p>✓ Lunch + Dinner</p>
              <p>✓ Freshly Prepared Meals</p>
              <p>✓ Homemade Food Experience</p>
              <p>✓ Hygienic Preparation</p>
            </div>

            <a
              href="#register"
              className="block text-center mt-8 bg-white text-orange-700 hover:bg-orange-100 py-3.5 sm:py-4 rounded-xl font-bold transition"
            >
              Choose Both Meals
            </a>

          </div>

        </div>
      </section>

      {/* REGISTRATION */}
      <section
        id="register"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-16"
      >

        <div className="text-center mb-8 sm:mb-10">

          <span className="text-orange-600 font-bold tracking-widest text-xs sm:text-sm">
            WELCOME TO VSR RASOI
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3">
            Tiffin Registration
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Register now and enjoy ghar jaisa khana every day.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-5 sm:p-8 md:p-10">

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">

            {/* CUSTOMER INFORMATION */}
            <div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-5">
                👤 Customer Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label className={labelStyle}>
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className={labelStyle}>
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter 10 digit number"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className={inputStyle}
                  />
                </div>

              </div>
            </div>

            {/* DELIVERY ADDRESS */}
            <div className="border-t border-gray-100 pt-6">

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-5">
                📍 Delivery Information
              </h3>

              <label className={labelStyle}>
                Complete Delivery Address *
              </label>

              <textarea
                name="address"
                placeholder="House number, street, area, landmark..."
                value={form.address}
                onChange={handleChange}
                required
                rows="4"
                className={inputStyle}
              />

            </div>

            {/* MEAL SELECTION */}
            <div className="border-t border-gray-100 pt-6">

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-5">
                🍽️ Select Your Meal
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

                {[
                  { name: "Lunch", icon: "☀️", price: 1499 },
                  { name: "Dinner", icon: "🌙", price: 1499 },
                  { name: "Both", icon: "🍱", price: 2499 },
                ].map((meal) => (

                  <button
                    key={meal.name}
                    type="button"
                    onClick={() => {
                      setForm({
                        ...form,
                        mealPreference: meal.name,
                      });
                      setErrorMessage("");
                    }}
                    className={`rounded-2xl border-2 py-5 transition ${
                      form.mealPreference === meal.name
                        ? "border-orange-500 bg-orange-50 text-orange-700 shadow-md"
                        : "border-gray-100 bg-gray-50 text-gray-600 hover:border-orange-300"
                    }`}
                  >

                    <div className="text-3xl mb-2">
                      {meal.icon}
                    </div>

                    <p className="font-bold text-sm sm:text-base">
                      {meal.name === "Both"
                        ? "Lunch + Dinner"
                        : meal.name}
                    </p>

                    <p className="font-black text-xl mt-2">
                      ₹{meal.price.toLocaleString("en-IN")}
                    </p>

                    <p className="text-xs">
                      Per Month
                    </p>

                  </button>

                ))}

              </div>

            </div>

            {/* START DATE */}
            <div className="border-t border-gray-100 pt-6">

              <label className={labelStyle}>
                Tiffin Starting Date *
              </label>

              <input
                type="date"
                name="startDate"
                min={new Date().toLocaleDateString("en-CA")}
                value={form.startDate}
                onChange={handleChange}
                required
                className={inputStyle}
              />

            </div>

            {/* PRICE */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 sm:p-6 flex justify-between items-center gap-3">

              <div className="min-w-0">
                <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                  Monthly Tiffin Plan
                </h3>

                <p className="text-xs text-gray-500 mt-2">
                  {form.mealPreference === "Both"
                    ? "Lunch + Dinner"
                    : form.mealPreference
                    ? `${form.mealPreference} Only`
                    : "Select Your Meal"}
                </p>
              </div>

              <div className="text-right shrink-0">

                <h2 className="text-2xl sm:text-3xl font-black text-orange-600">
                  ₹
                  {form.mealPreference
                    ? selectedPrice.toLocaleString("en-IN")
                    : "0"}
                </h2>

                <p className="text-xs text-gray-500">
                  Per Month
                </p>

              </div>

            </div>

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <div
                role="alert"
                className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm"
              >
                ⚠️ {errorMessage}
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg shadow-orange-100 transition"
            >
              {isSubmitting
                ? "Submitting Registration..."
                : "Submit Registration →"}
            </button>

            <p className="text-center text-xs text-gray-400">
              Your details will be submitted to VSR Rasoi.
            </p>

          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#24160f] text-white mt-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          <div className="text-center mb-10 sm:mb-12">

            <div className="text-5xl sm:text-6xl mb-5">
              🍱
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-wider">
              VSR <span className="text-orange-400">RASOI</span>
            </h2>

            <p className="text-orange-200 mt-3 text-sm sm:text-base">
              Har Bite Mein Ghar Ka Pyaar ❤️
            </p>

            <p className="text-gray-400 mt-4 text-xs sm:text-sm">
              For Tiffin Orders, Registration & Enquiries
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">

            {owners.map((owner, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 text-center hover:bg-white/10 transition"
              >

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500 flex items-center justify-center text-3xl mx-auto mb-4">
                  👤
                </div>

                <h3 className="font-bold text-base sm:text-lg">
                  {owner.name}
                </h3>

                <p className="text-orange-300 mt-2 text-sm">
                  {owner.phone}
                </p>

                <a
                  href={`https://wa.me/91${owner.phone}?text=${encodeURIComponent(
                    "Hello, I want to enquire about VSR Rasoi tiffin service."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 bg-green-600 hover:bg-green-700 px-6 sm:px-7 py-3 rounded-xl text-sm font-bold transition"
                >
                  WhatsApp Enquiry
                </a>

              </div>

            ))}

          </div>

          <div className="border-t border-white/10 mt-10 sm:mt-12 pt-7 text-center">

            <p className="text-gray-400 text-xs sm:text-sm">
              © 2026 VSR Rasoi. All Rights Reserved.
            </p>

            <p className="text-orange-300 text-xs mt-3">
              Fresh Food • Homemade Taste • Happy Customers
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default App;