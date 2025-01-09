import { useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='title'>Desenvolvimento de Website</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/2024</td>
          </tr>
          <tr>
            <td className='title'>Aluguel</td>
            <td className='withdraw'> - R$1.100</td>
            <td>Casa</td>
            <td>17/12/2024</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
