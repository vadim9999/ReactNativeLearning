import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text, Button } from 'react-native';

import { TEST_ENDPOINT } from 'react-native-dotenv';


const Profile = () => {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  const [state, setState] = useState({
    loading: true,
    data: []
  });

  useEffect(() => {
    const getDataFromApi = async () => {
      console.log('call');
      try {
        const response = await fetch('https://api.spacexdata.com/v3/capsules');
        const json = await response.json();
        // console.log('result', json);
        // setData(json);
        // setLoading(false);
        setState(prevState => ({
          ...prevState,
          loading: false,
          data: json
        }));
      } catch (error) {
        console.log('error');
      }
    };

    // getDataFromApi();
  }, []);
  // useEffect(() => {
  //   fetch('https://reactnative.dev/movies.json')
  //     .then(response => response.json())
  //     .then(json => setData(json.movies))
  //     .catch(error => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);
  console.log('data***', state);
  console.log("endpoint", TEST_ENDPOINT);
  
  return (
    <View>
      <Text>Profile</Text>
      {state.loading ? (
        <ActivityIndicator />
      ) : (
          <FlatList
            data={state.data}
            keyExtractor={({ id }, index) => index.toString()}
            renderItem={({ item }) => (
              <Text>
                {`ttt ${item.capsule_serial}`}, {item.capsule_id}
              </Text>
            )}
          />
        )}
    </View>
  );
};

export default Profile;
