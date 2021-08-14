import styled, { css }  from "styled-components";
import List from '@material-ui/core/List';


export const ListContainer = styled(List)(() => css`
.list-container {
    padding: 0 !important;

    &-grid {
      margin: 0 !important;
    }

    .description-panel {
      margin-top: -30px;
      margin-left: -10px;

      & .address-text-image {
        margin-bottom: 20px;
      }

      & .operating-hours-style {
        margin-bottom: 10px;
      }

      & .text-header-container {
        margin-bottom: -5px;
      }
    }

    .rating-panel {
    }
    &__rating-container {
      margin-top: 0 !important;
      padding: 0 !important;
      margin-bottom: 20px !important;
      display: grid;
      grid-template-columns: 50% 50%;

      div {
        align-self: center;
      }

      button {
        width: 100%;
        font-size: 10px;
      }
    }

    .know-more {
      &__link {
        display: block;
        text-transform: uppercase;
        margin: 10px;
        background: $brand-orange;
        padding: 5px;
        margin-left: 30px;
        margin-right: 30px;

        span {
          color: $white !important;
          font-size: 12px;
        }
      }

      &-panel {
        padding-top: 0px !important;
        display: grid;
        grid-template-columns: 1fr 1fr;

        .services__heading {
          justify-self: flex-start;
          grid-column: 1 / span 3;

          &--brand-blue {
            font-weight: bold;
            color: $brand-blue;
            padding-right: 5px;
          }
          &--no-color {
            font-weight: normal;
            color: rgba(0, 0, 0, 0.87);
          }
        }

        .schedule-now {
          &__button {
            &--width {
              width: 152px;
            }
          }
        }
      }

      &__link {
        grid-column-start: span 3;
      }
    }
}
`)