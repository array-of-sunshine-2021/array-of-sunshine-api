//ContainerForm.js

import { useState, useEffect } from "react";

const ContainerForm = () => {
  return (
    <div>
      <label htmlFor="sunInput">Before Sunset</label>
      <input type="radio" name="sunInput" className="sunInput" value="sunset" />
    </div>
  );
};

export default ContainerForm;
