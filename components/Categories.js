import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop:10,
        }}
    horizontal
        showsHorizontalScrollIndicator={false}
    >
        {/* CategoryCard */}
      <CategoryCard imgUrl="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg" title="Hello"/>
      <CategoryCard imgUrl="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg" title="Hello"/>
      <CategoryCard imgUrl="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg" title="Hello"/>
      <CategoryCard imgUrl="https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg" title="Hello"/>
      <CategoryCard imgUrl="https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_960_720.jpg" title="Hello"/>
      <CategoryCard imgUrl="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_960_720.jpg" title="Hello"/>
      <CategoryCard imgUrl="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" title="Hello"/>
      <CategoryCard imgUrl="https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_960_720.jpg" title="Hello"/>
    </ScrollView>
  )
}
export default Categories