import React, { useState, useEffect } from 'react';
import {
  Box,
  Stat,
  useToast,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  RadioGroup,
  Stack,
  Radio,
  IconButton,
} from '@chakra-ui/react';
import Card from '../../components/Card';
import { useForm } from 'react-hook-form';

import { AiOutlineSave } from 'react-icons/ai';
import TableFinanceira from '../../components/TableFinanceira';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default function Home() {
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();
  const [card, setCard] = useState({});
  const [list, setlist] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    getCard();
    getList();
    setloading(false);
  }

  async function getCard() {
    const { data } = await api.get('/total');
    setCard(data);
  }

  async function getList() {
    const { data } = await api.get('/conta');
    setlist(data);
  }

  async function handleAdd(data) {
    try {
      await api.post('/conta', data);
      toast({
        title: 'Sucesso',
        description: 'Adicionada com Sucesso',
        status: 'success',
        duration: 2200,
        isClosable: true,
      });
      reset();
      getAll();
    } catch (e) {
      console.log(e);
      toast({
        title: 'Falha',
        description: 'Tenta novamente por favor',
        status: 'error',
        duration: 2200,
        isClosable: true,
      });
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Card data={card} />
          <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <Stat
              px={{ base: 2, md: 4 }}
              py={'5'}
              shadow={'xl'}
              border={'1px solid'}
              borderColor={'gray.500'}
              rounded={'lg'}
              mb="4"
            >
              <form onSubmit={handleSubmit(handleAdd)}>
                <HStack spacing={2}>
                  <Input
                    placeholder="Descrição"
                    fontWeight={'bold'}
                    borderColor={'blackAlpha.600'}
                    {...register('descricao')}
                  />
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      fontSize="1.2em"
                      children="$"
                    />
                    <Input
                      placeholder="Valor"
                      fontWeight={'bold'}
                      borderColor={'blackAlpha.600'}
                      {...register('valor')}
                    />
                  </InputGroup>
                  <RadioGroup default={2}>
                    <Stack direction="row">
                      <Radio colorScheme="red" value="S" {...register('tipo')}>
                        Saida
                      </Radio>
                      <Radio
                        colorScheme="green"
                        value="E"
                        {...register('tipo')}
                      >
                        Entrada
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <IconButton
                    colorScheme="green"
                    icon={<AiOutlineSave />}
                    borderRadius={50}
                    type="submit"
                  />
                </HStack>
              </form>
            </Stat>
            <TableFinanceira data={list} getAll={getAll} />
          </Box>
        </Box>
      )}
    </>
  );
}
