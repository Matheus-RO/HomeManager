import React from 'react'
import { View, TextInput, Button, FlatList, StyleSheet, Text, CheckBox } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const ShoppList = () => {
  return (
    <View>
      <TextInput
        placeholder="Digite um item"
      />
      <TextInput
        placeholder="Valor R$"
      />
      <Button
        title="Adicionar"
      />

      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) =>
          <>
            <CheckBox /> <Text style={styles.item}>{item.key}</Text>
            <TextInput
              placeholder="R$ 00,00"
            />
          </>
        }
      />
    </View>
  )
}

export default ShoppList;
