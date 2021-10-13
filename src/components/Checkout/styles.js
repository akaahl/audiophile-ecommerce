import styled from "styled-components";

export const StyledInnerForm = styled.form`
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .left-side {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 40px;
    flex: 0.7;

    h2 {
      text-transform: uppercase;
      font-size: 30px;
    }

    .billing {
      margin-top: 30px;

      h4 {
        text-transform: uppercase;
        color: #d87d4a;
        letter-spacing: 1px;
        font-size: 16px;
      }

      .billing-details {
        margin-top: 20px;
        display: grid;
        grid-gap: 15px;
        grid-template-areas:
          "name email"
          "number .";

        .name {
          grid-area: name;
        }

        .email {
          grid-area: email;
        }

        .number {
          grid-area: number;
        }

        .name,
        .email,
        .number {
          .top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            label {
              font-weight: 700;
              color: #000000;
              font-size: 14px;
            }

            small,
            .error-message {
              color: orangered;
              font-size: 12px;
              font-weight: 400;
            }
          }

          .input-el {
            margin-top: 10px;
            width: 100%;
            border-radius: 5px;
            padding: 15px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            color: #000000;
            font-weight: 700;
            transition: all 0.1s linear;
            outline: none;

            &::placeholder {
              font-weight: 600;
              opacity: 0.7;
            }

            &:focus {
              border: 1px solid #d87d4a;
            }
          }
        }
      }
    }

    .shipping {
      margin-top: 30px;

      h4 {
        text-transform: uppercase;
        color: #d87d4a;
        letter-spacing: 1px;
        font-size: 16px;
      }

      .shipping-info {
        margin-top: 20px;
        display: grid;
        grid-gap: 15px;
        grid-template-areas:
          "address address"
          "zipcode city"
          "country .";

        .address {
          grid-area: address;
        }

        .zip-code {
          grid-area: zipcode;
        }

        .city {
          grid-area: city;
        }

        .country {
          grid-area: country;
        }

        .address,
        .zip-code,
        .city,
        .country {
          .top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            label {
              font-weight: 700;
              color: #000000;
              font-size: 14px;
            }

            small {
              color: orangered;
              font-size: 12px;
              font-weight: 400;
            }
          }

          .input-el {
            margin-top: 10px;
            width: 100%;
            border-radius: 5px;
            padding: 15px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            outline: none;
            transition: all 0.2s linear;
            color: #000000;
            font-weight: 700;

            &::placeholder {
              font-weight: 600;
              opacity: 0.7;
            }

            &:focus {
              border: 1px solid #d87d4a;
            }
          }
        }
      }
    }

    .payment {
      margin-top: 30px;

      h4 {
        text-transform: uppercase;
        color: #d87d4a;
        letter-spacing: 1px;
        font-size: 16px;
      }

      .top {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        span {
          flex: 0.5;
          font-weight: 700;
          color: #000000;
          font-size: 14px;
        }

        .payment-methods {
          flex: 0.5;
          margin-left: 15px;

          .payment-method {
            width: 100%;
            border-radius: 5px;
            padding: 15px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;

            &:nth-child(2) {
              margin-top: 15px;
            }

            .checkmark {
              height: 20px;
              width: 20px;
              border-radius: 50%;
              border: 1px solid rgba(0, 0, 0, 0.2);

              position: relative;

              &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 0px;
                width: 0px;
                border-radius: 50%;
                background-color: #d87d4a;
                transition: all 0.3s ease-in-out;
              }
            }

            input[type="radio"] {
              display: none;

              &:checked ~ .checkmark::after {
                height: 10px;
                width: 10px;
              }
            }

            span {
              margin-left: 15px;
              font-weight: 700;
              font-size: 14px;
            }
          }
        }
      }

      .bottom {
        margin-top: 40px;

        .e-money-details {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .e-money-number,
          .e-money-pin {
            flex: 0.5;

            .top {
              display: flex;
              align-items: center;
              justify-content: space-between;

              label {
                font-weight: 700;
                color: #000000;
                font-size: 14px;
              }

              small {
                color: orangered;
                font-size: 12px;
                font-weight: 400;
              }
            }

            .input-el {
              margin-top: 10px;
              width: 100%;
              border-radius: 5px;
              padding: 15px;
              border: 1px solid rgba(0, 0, 0, 0.2);
              outline: none;
              transition: all 0.2s linear;
              color: #000000;
              font-weight: 700;

              &::placeholder {
                font-weight: 600;
                opacity: 0.7;
              }

              &:focus {
                border: 1px solid #d87d4a;
              }
            }
          }

          .e-money-pin {
            margin-left: 15px;
          }
        }

        .cod-details {
          display: flex;
          align-items: center;

          p {
            flex: 1;
            margin-left: 40px;
            color: #191919;
            opacity: 0.6;
          }
        }
      }
    }
  }

  .right-side {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 25px;
    flex: 0.3;
    margin-left: 30px;

    h2 {
      text-transform: uppercase;
    }

    ul {
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left-side {
          margin-top: 25px;
          display: flex;
          align-items: center;
          padding: 0;

          img {
            height: 60px;
            width: 60px;
            object-fit: cover;
            border-radius: 8px;
          }

          .item-details {
            margin-left: 20px;
            .display-name {
              font-weight: 700;
              font-size: 14px;
            }

            .price {
              margin-top: 3px;
              font-weight: 500;
              font-size: 14px;
              color: #888888;
              opacity: 0.9;
            }
          }
        }

        .quantity {
          font-weight: 600;
          font-size: 14px;
          color: #888888;
          opacity: 0.9;
        }
      }
    }

    .total-details {
      margin-top: 40px;

      .total,
      .shipping,
      .tax,
      .grand-total {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-weight: 200;
          font-size: 16px;
          color: #191919;
          text-transform: uppercase;
        }
      }

      .total,
      .shipping,
      .tax {
        margin-top: 5px;
        span {
          font-size: 18px;
          color: #191919;
          font-weight: 700;
        }
      }

      .grand-total {
        margin-top: 30px;

        span {
          font-size: 18px;
          color: #d87d4a;
          font-weight: 700;
        }
      }

      .submit-pay {
        margin-top: 30px;
        background-color: #d87d4a;
        border: none;
        padding: 15px 25px;
        width: 100%;
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #fbaf85;
          color: #000000;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .left-side {
      width: 100%;
    }

    .right-side {
      margin-left: 0;
      margin-top: 40px;
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    margin-top: 20px;

    label,
    span,
    p {
      font-size: 12px !important;
    }

    h2 {
      font-size: 25px !important;
    }

    h4 {
      font-size: 14px !important;
    }

    .total-text,
    .total-span {
      font-size: 14px !important;
    }

    .left-side {
      padding: 20px;

      .billing {
        .billing-details {
          display: flex;
          flex-direction: column;
        }
      }

      .shipping {
        .shipping-info {
          display: flex;
          flex-direction: column;
        }
      }

      .payment {
        .top {
          display: flex;
          flex-direction: column;

          .payment-methods {
            margin-left: 0;
            margin-top: 15px;
          }
        }
      }
    }

    .right-side {
      padding: 20px;
    }

    .submit-pay {
      padding: 10px 20px !important;
    }
  }
`;
