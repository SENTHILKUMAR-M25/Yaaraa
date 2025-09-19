import React from "react";

const FooterBrand = () => {
  return (
    <div className="text-center mt-6">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Yaaraa Technologies. All rights reserved.
      </p>
    </div>
  );
};

export default FooterBrand;
