import { View, Text, Pressable } from 'react-native'

const CategoryGridTile = ({title, color}) => {
  return (
    <View>
      <Pressable>
        <View>
            <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;