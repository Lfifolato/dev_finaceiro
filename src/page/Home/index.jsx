import React from 'react';
import {
  Box,
  Stat,
  useColorModeValue,
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

export default function Home() {
  const { register, handleSubmit } = useForm();
  return (
    <Box>
      <Card />
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Stat
          px={{ base: 2, md: 4 }}
          py={'5'}
          shadow={'xl'}
          border={'1px solid'}
          borderColor={useColorModeValue('gray.800', 'gray.500')}
          rounded={'lg'}
          mb="4"
        >
          <form onSubmit={handleSubmit()}>
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
              <RadioGroup defaultValue="2" {...register('tipo')}>
                <Stack direction="row">
                  <Radio colorScheme="red" value="E">
                    Saida
                  </Radio>
                  <Radio colorScheme="green" value="S">
                    Entrada
                  </Radio>
                </Stack>
              </RadioGroup>
              <IconButton
                colorScheme="green"
                icon={<AiOutlineSave />}
                borderRadius={50}
              />
            </HStack>
          </form>
        </Stat>
      </Box>
    </Box>
  );
}
