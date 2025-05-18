import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando...</h2>
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
