import React from 'react';
import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Table,
  IconButton,
} from '@chakra-ui/react';

import { ImBin } from 'react-icons/im';
import api from '../../services/api';

export default function TableFinanceira({ ...pros }) {
  async function HandleDelete(id) {
    await api.delete(`/conta/${id}`);
    pros.getAll();
  }

  return (
    <TableContainer
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      rounded={'lg'}
      mb="4"
      maxW="7xl"
      mx={'auto'}
      pt={5}
      px={{ base: 2, md: 4 }}
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Descrição</Th>
            <Th>Tipo</Th>
            <Th>Valor</Th>
            <Th>Data</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        {pros.data.map(item => {
          return (
            <Tr key={item.id}>
              <Td>{item.descricao}</Td>
              <Td>{item.tipo}</Td>
              <Td>R$ {item.valor}</Td>
              <Td>{item.created_at}</Td>
              <Td>
                <IconButton
                  size={'sm'}
                  colorScheme="red"
                  fontSize={15}
                  onClick={() => HandleDelete(item.id)}
                  icon={<ImBin />}
                />
              </Td>
            </Tr>
          );
        })}
      </Table>
    </TableContainer>
  );
}
