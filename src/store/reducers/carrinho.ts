import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload
      if (state.itens.find((produto) => produto.id === product.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(product)
      }
    }
  }
})

export const { adicionar } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
