import React from 'react';

import { Link } from 'react-router-dom';

import { Wrapper, Image, Content, IconsWrapper, Footer, Details } from './styles';

import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

export default function Recipe(props) {
    
    return (
        <Wrapper>
            <Image src={props.img} />
            <Content>
                    <h1>{props.name}</h1>
                    <p>Postado em: {props.createdAt}</p>
                    <p>Última atualização: {props.createdAt}</p>
                    <Footer>
                        <Details><button><Link to={`recipe/${props.id}`}>Ver Detalhes</Link></button></Details>
                        <IconsWrapper>
                            <button><FaEdit /></button>
                            <button><FaTrash /></button>
                        </IconsWrapper>
                    </Footer>
            </Content>
        </Wrapper>
    );
}