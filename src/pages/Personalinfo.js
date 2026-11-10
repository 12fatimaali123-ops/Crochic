import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../styles/Personalinfo.css'

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
const [backupInfo, setBackupInfo] = useState(null);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    crochetExperience: 'Beginner - Just starting out',
    yearsCrocheting: '',
    howLearned: '',
    favoriteProjects: [],
    favoriteYarnMaterial: [],
    favoriteHookSize: [],
    interestedIn: [],
    priceRange: '$20-$50',
    crochetGoals: '',
    dreamProject: '',
    inspirationSource: [],
    receivePatterns: true,
    receiveTips: true,
    receivePromotions: false
  });
  useEffect(() => {
  try {
    const savedInfo = JSON.parse(
      localStorage.getItem("crochetUserInfo")
    );

    if (savedInfo && typeof savedInfo === "object" && !Array.isArray(savedInfo)) {
      setUserInfo((previous) => ({
        ...previous,
        ...savedInfo,
      }));
    }
  } catch {
    console.log("Could not load saved profile.");
  }
}, []);

  const experienceLevels = [
    'Beginner - Just starting out',
    'Intermediate - Comfortable with basic stitches',
    'Advanced - Can read complex patterns',
    'Expert - Create my own designs'
  ];

  const howLearnedOptions = [
    'Self-taught (YouTube/Online)',
    'Classes/Workshops',
    'Family/Friends',
    'Books/Magazines',
    'Crochet groups'
  ];

  const projectTypes = [
    { id: 'blankets', name: '🧶 Blankets & Throws' },
    { id: 'amigurumi', name: '🧸 Amigurumi/Toys' },
    { id: 'wearables', name: '👗 Wearables (Cardigans, Sweaters)' },
    { id: 'accessories', name: '🧣 Accessories (Hats, Scarves)' },
    { id: 'homeDecor', name: '🏠 Home Decor' },
    { id: 'bags', name: '👜 Bags & Purses' }
  ];


  const yarnMaterials = [
    'Cotton', 'Acrylic', 'Wool', 'Bamboo', 'Alpaca', 'Merino', 'Silk', 'Blends'
  ];

  const hookSizes = ['2mm', '2.5mm', '3mm', '3.5mm', '4mm', '5mm', '6mm', '8mm', '10mm'];

  const colorOptions = [
    'Red', 'Pink', 'Orange', 'Yellow', 'Green', 'Blue',
    'Purple', 'Brown', 'Black', 'White', 'Gray', 'Multicolor'
  ];

  const colorPalettes = ['Pastels', 'Bright & Bold', 'Earth tones', 'Neutrals', 'Jewel tones'];

  const interestOptions = ['Patterns', 'Finished products', 'Yarn', 'Crochet tools', 'Online classes', 'Custom orders'];

  const priceRanges = ['$10-$20', '$20-$50', '$50-$100', '$100+'];

  const inspirationSources = ['Pinterest', 'Instagram', 'YouTube', 'Ravelry', 'Crochet Blogs', 'Etsy', 'Magazines'];

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  let newValue;

  if (type === "checkbox") {
    newValue = checked;
  } else {
    newValue = value;
  }

  setUserInfo((prevUserInfo) => ({
    ...prevUserInfo,
    [name]: newValue,
  }));
};

  const handleMultiSelect = (field, value) => {
    setUserInfo(prev => {
      const current = [...prev[field]];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [field]: [...current, value] };
      }
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem('crochetUserInfo', JSON.stringify(userInfo));
    alert('Your crochet profile has been saved! 🧶');
  };
  const handleEdit = () => {
  setBackupInfo(userInfo);
  setIsEditing(true);
};

const handleCancel = () => {
  setUserInfo(backupInfo);
  setIsEditing(false);
};

  return (
   <div className="profile-container">
    <div className="profile-header">
      <div>
        <h2 className="profile-header-title">🧶 My Crochet Profile</h2>
        <p className="profile-header-subtitle">
          Tell us about your crochet journey to get personalized recommendations
        </p>
      </div>

      {!isEditing ? (
        <button className="edit-button" onClick={handleEdit}>
          ✏️ Edit Profile
        </button>
      ) : (
        <div className="edit-actions">
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="save-button" onClick={handleSave}>
            💾 Save Changes
          </button>
        </div>
      )}
    </div>

    <div className="profile-content">
      
      <div className="profile-section">
        <h3 className="section-title">📋 Basic Information</h3>

        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">First Name</label>
            {isEditing ? (
              <input
                className="form-input"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            ) : (
              <p className="text-value">{userInfo.firstName || "—"}</p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label">Last Name</label>
            {isEditing ? (
              <input
                className="form-input"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            ) : (
              <p className="text-value">{userInfo.lastName || "—"}</p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label">Email</label>
            {isEditing ? (
              <input
                className="form-input"
                name="email"
                type="email"
                value={userInfo.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
            ) : (
              <p className="text-value">{userInfo.email || "—"}</p>
            )}
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h3 className="section-title">🎓 Crochet Experience</h3>

        <div className="form-grid">
          <div className="form-field">
            <label className="form-label">Skill Level</label>
            {isEditing ? (
              <select
                className="form-select"
                name="crochetExperience"
                value={userInfo.crochetExperience}
                onChange={handleChange}
              >
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-value">{userInfo.crochetExperience}</p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label">Years Crocheting</label>
            {isEditing ? (
              <input
                className="form-input"
                name="yearsCrocheting"
                type="number"
                value={userInfo.yearsCrocheting}
                onChange={handleChange}
                placeholder="e.g., 3"
              />
            ) : (
              <p className="text-value">
                {userInfo.yearsCrocheting
                  ? `${userInfo.yearsCrocheting} years`
                  : "—"}
              </p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label">How did you learn?</label>
            {isEditing ? (
              <select
                className="form-select"
                name="howLearned"
                value={userInfo.howLearned}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {howLearnedOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-value">{userInfo.howLearned || "—"}</p>
            )}
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h3 className="section-title">❤️ Favorite Projects to Make</h3>

        <div className="tag-group">
          {projectTypes.map((project) => (
            <button
              key={project.id}
              className={
                userInfo.favoriteProjects.includes(project.id)
                  ? "tag tag-active"
                  : "tag"
              }
              onClick={() =>
                isEditing && handleMultiSelect("favoriteProjects", project.id)
              }
              disabled={!isEditing}
            >
              {project.name}
            </button>
          ))}
        </div>

        {!isEditing && userInfo.favoriteProjects.length === 0 && (
          <p className="empty-message">No favorite projects selected yet</p>
        )}
      </div>

      <div className="profile-section">
        <h3 className="section-title">🧵 Yarn Preferences</h3>

        <div className="form-field">
          <label className="form-label">Favorite Yarn Materials</label>

          <div className="tag-group">
            {yarnMaterials.map((material) => (
              <button
                key={material}
                className={
                  userInfo.favoriteYarnMaterial.includes(material)
                    ? "tag tag-active"
                    : "tag"
                }
                onClick={() =>
                  isEditing &&
                  handleMultiSelect("favoriteYarnMaterial", material)
                }
                disabled={!isEditing}
              >
                {material}
              </button>
            ))}
          </div>
        </div>

        <div className="form-field">
          <label className="form-label">Favorite Hook Sizes</label>

          <div className="tag-group">
            {hookSizes.map((size) => (
              <button
                key={size}
                className={
                  userInfo.favoriteHookSize.includes(size)
                    ? "tag tag-active"
                    : "tag"
                }
                onClick={() =>
                  isEditing && handleMultiSelect("favoriteHookSize", size)
                }
                disabled={!isEditing}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h3 className="section-title">🛍️ Shopping Preferences</h3>

        <div className="form-field">
          <label className="form-label">What are you interested in?</label>

          <div className="tag-group">
            {interestOptions.map((item) => (
              <button
                key={item}
                className={
                  userInfo.interestedIn.includes(item)
                    ? "tag tag-active"
                    : "tag"
                }
                onClick={() =>
                  isEditing && handleMultiSelect("interestedIn", item)
                }
                disabled={!isEditing}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="form-field">
          <label className="form-label">Budget per project</label>

          {isEditing ? (
            <select
              className="form-select"
              name="priceRange"
              value={userInfo.priceRange}
              onChange={handleChange}
            >
              {priceRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          ) : (
            <p className="text-value">{userInfo.priceRange}</p>
          )}
        </div>
      </div>

     
      <div className="profile-section">
        <h3 className="section-title">⭐ Crochet Goals & Inspiration</h3>

        <div className="form-field">
          <label className="form-label">What are your crochet goals?</label>

          {isEditing ? (
            <textarea
              className="form-textarea"
              name="crochetGoals"
              rows="3"
              value={userInfo.crochetGoals}
              onChange={handleChange}
              placeholder="e.g., Learn to make sweaters, Create my first blanket, Start selling my work..."
            />
          ) : (
            <p className="goal-text">
              {userInfo.crochetGoals || "No goals added yet"}
            </p>
          )}
        </div>

        <div className="form-field">
          <label className="form-label">What's your dream project?</label>

          {isEditing ? (
            <textarea
              className="form-textarea"
              name="dreamProject"
              rows="2"
              value={userInfo.dreamProject}
              onChange={handleChange}
              placeholder="e.g., A temperature blanket, A crochet wedding dress, Life-sized amigurumi..."
            />
          ) : (
            <p className="goal-text">
              {userInfo.dreamProject || "No dream project yet"}
            </p>
          )}
        </div>

        <div className="form-field">
          <label className="form-label">Where do you find inspiration?</label>

          <div className="tag-group">
            {inspirationSources.map((source) => (
              <button
                key={source}
                className={
                  userInfo.inspirationSource.includes(source)
                    ? "tag tag-active"
                    : "tag"
                }
                onClick={() =>
                  isEditing &&
                  handleMultiSelect("inspirationSource", source)
                }
                disabled={!isEditing}
              >
                {source}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="profile-section">
        <h3 className="section-title">🔔 What would you like to receive?</h3>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="receivePatterns"
              checked={userInfo.receivePatterns}
              onChange={handleChange}
              disabled={!isEditing}
            />
            <span>🧶 Free patterns & tutorials</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="receiveTips"
              checked={userInfo.receiveTips}
              onChange={handleChange}
              disabled={!isEditing}
            />
            <span>💡 Crochet tips & techniques</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="receivePromotions"
              checked={userInfo.receivePromotions}
              onChange={handleChange}
              disabled={!isEditing}
            />
            <span>🛍️ Sales & promotions</span>
          </label>
        </div>
      </div>
    </div>
  </div>
  );
};


export default PersonalInfo;