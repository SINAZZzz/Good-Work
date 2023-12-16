//style
import "style/pages/profile.scss";

//components
import ProfileMobile from "components/pages/profile/ProfileMobile";

/**
 * profile page has a page just for mobile ratio.
 * for web ratio, we use modal(which is in components folder)
 *
 */

const Profile = () => {
  return (
    <div className="profile h-100">
      <ProfileMobile />
    </div>
  );
};

export default Profile;
