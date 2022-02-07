import React from 'react';
import Breadcumb from '../../components/Breadcumb';
import ProfileCard from './ProfileCard';
import ProfileForm from './ProfileForm';


const Profile = () => {
  return (
      <>
      <Breadcumb title="Profile"/>
      <div className="row">
          <ProfileCard/>
          <ProfileForm/>
      </div>
      </>
  );
};

export default Profile;
