import React from "react";
import * as S from "./styles"
import LogoItau from "../../assets/logo.svg"
import ItemMenu from "./ItemMenu";
import IconUser from "../../assets/icon-user.svg"

export default function Header() {
    return (
        <S.Header>
            <S.Container>
                <S.ContainerItens>
                    <div>
                        <S.Img src={LogoItau} alt="logo itaú" />
                    </div>

                    <S.Ul>
                        <S.Li>
                            <ItemMenu name="Para você" />
                        </S.Li>
                        <S.Li>
                            <ItemMenu name="Para empresas" />
                        </S.Li>
                        <S.Li>
                            <ItemMenu name="Para serviços" />
                        </S.Li>
                        <S.Li>
                            <ItemMenu name="Ajuda" />
                        </S.Li>
                    </S.Ul>

                    <S.DivButtonAccess>
                        <S.ButtonAccess>
                            <img src={IconUser} alt="icon user" />
                            <span>Acessar Conta</span>
                        </S.ButtonAccess>
                    </S.DivButtonAccess>
                </S.ContainerItens>
            </S.Container>
        </S.Header>
    )
}