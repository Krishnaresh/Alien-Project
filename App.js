//importing the elements from the react native libraries
import React from 'react';
import {SafeAreaView} from 'react-native';
import MyText from './components/Mytext/mytext';
import Item from './components/Item/item';

const App = () => {
  return (
    //to view the code elements with in the stipulated area in ios and andriod apps
    <SafeAreaView>
      <MyText />
      <Item name={'Table'} price={20} />
      <Item name={'Chair'} price={30} />
      <Item name={'Desk'} price={40} />
    </SafeAreaView>
  );
};

//allows these elements to be used in other JavaScript files, thus making the code reusable and modular
export default App;
