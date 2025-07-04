import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useUser } from '@clerk/clerk-expo';

const ProfileScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [followers, setFollowers] = useState(0);

  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleAddFriend = () => {
    setFollowers(followers + 1);
  };
  const { user } = useUser();
  return (
    <View style={styles.container}>
      {/* Banner Section (Twitter Style) */}
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={{
            uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-Peaceful-Background.jpg',
          }} 
        />
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://th.bing.com/th/id/OIP.8n7dPdgUGoXllIeuXyk90AHaEK?rs=1&pid=ImgDetMain',
            }} 
          />
        </View>
        {/* Back Button */}
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      {/* User Information */}
      <Text style={styles.username}>{user ? user?.firstName : "svecias"}</Text>
      <Text style={styles.joinedDate}>Joined August 2020</Text>

      {/* Following/Followers */}
      <View style={styles.followingContainer}>
        <Text style={styles.followingText}>0 Following</Text>
        <Text style={styles.followersText}>{followers} Followers</Text>
      </View>

      {/* Add Friends Button */}
      <TouchableOpacity onPress={handleAddFriend} style={styles.addFriendsButton}>
        <Text style={styles.addFriendsButtonText}>+ ADD FRIENDS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 150, 
    marginBottom: 20,
    position: 'relative', 
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  profileImageContainer: {
    position: 'absolute',
    bottom: -60, 
    left: 155, 
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4, 
    borderColor: 'white',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom: 10,
  },
  joinedDate: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
  },
  followingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  followingText: {
    marginRight: 10,
    fontSize: 16,
  },
  followersText: {
    marginLeft: 10,
    fontSize: 16,
  },
  addFriendsButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  addFriendsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)', 
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default ProfileScreen;
