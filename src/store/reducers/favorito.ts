import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritoState = {
  fav: Produto[]
}

const initialState: favoritoState = {
  fav: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload
      if (state.fav.find((produto) => produto.id === product.id)) {
        state.fav = state.fav.filter((p) => p.id !== product.id)
      } else {
        state.fav.push(product)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
