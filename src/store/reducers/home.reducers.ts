import * as home from "../actions/home.action";
import { Data } from "providers/data/data";

export interface homeState {
  data: any;
  pending: boolean;
  error: any;
  curentModule: string;
}

const initialState: homeState = {
  data: null,
  pending: false,
  error: null,
  curentModule: null
};

export function reducer(
  state = initialState,
  action: home.HomeAction
): homeState {
  switch (action.type) {
    case home.MISC_DATA: {
      return {
        ...state,
        pending: true
      };
    }
    case home.MISC_SUCCESS: {
      return {
        ...state,
        pending: false,
        data: action.payload
      };
    }
    case home.MISC_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    }
    case home.REDUCE_NOTIFICATION_COUNT: {

     

      let regularOferringList = false;
      let mostUserOfferings = false;

      const mostUsedOfferingsList = state.data.mostUsedOfferingList;
      const regularOfferingList = state.data.offeringList;

      for (let i = 0; i < regularOfferingList.length; i++) {
        if (state.curentModule == regularOfferingList[i].homePageConfigrationName) {
          regularOferringList = true;
        }
      }

      if (regularOferringList) {
        if (state.data) {
          const modifiedOfferList = state.data.offeringList

          for (let i = 0; i < modifiedOfferList.length; i++) {
            if (modifiedOfferList[i].homePageConfigrationName == state.curentModule) {
              modifiedOfferList[i].unreadNotificationCount = modifiedOfferList[i].unreadNotificationCount - 1;
              regularOferringList = true;

            }
          }
          return {
            ...state,
            data: {
              ...state.data,
              offeringList: modifiedOfferList

            }
          }
        }

      }

      if (!regularOferringList) {
        for (let i = 0; i < mostUsedOfferingsList.length; i++) {
          if (state.curentModule == mostUsedOfferingsList[i].homePageConfigrationName) {
            mostUserOfferings = true;
          }
        }
      }

      if (mostUserOfferings) {
        if (state.data) {
          const modifiedOfferList = state.data.mostUsedOfferingList

          for (let i = 0; i < modifiedOfferList.length; i++) {
            if (modifiedOfferList[i].homePageConfigrationName == state.curentModule) {
              modifiedOfferList[i].unreadNotificationCount = modifiedOfferList[i].unreadNotificationCount - 1;
              regularOferringList = true;

            }
          }
          return {
            ...state,
            data: {
              ...state.data,
              mostUsedOfferingList: modifiedOfferList

            }
          }

        }
      }

      // // code to refer starts

      // // let regularOferringList = false;
      // // let mostUserOfferings = false;
      // // const mostUsedOfferingsList = state.data.mostUsedOfferingList;
      // // const regularOfferingList = state.data.offeringList;

      // for (let i = 0; i < regularOfferingList.length; i++) {
      //   if (state.curentModule == regularOfferingList[i].homePageConfigrationName) {
      //     regularOferringList = true;
      //   }
      // }

      // if (regularOferringList) {
      //   if (state.data) {

      //     const offeringList = state.data.offeringList;

      //     let foundItem = offeringList.find((item) => {
      //       return item.homePageConfigrationName == state.curentModule
      //     });

      //     return foundItem && foundItem.unreadNotificationCount;
      //   }
      // }

      // if (!regularOferringList) {
      //   for (let i = 0; i < mostUsedOfferingsList.length; i++) {
      //     if (state.curentModule == mostUsedOfferingsList[i].homePageConfigrationName) {
      //       mostUserOfferings = true;
      //     }
      //   }
      // }

      // if (mostUserOfferings) {
      //   if (state.data) {

      //     const offeringList = state.data.mostUsedOfferingList;

      //     let foundItem = offeringList.find((item) => {
      //       return item.homePageConfigrationName == state.curentModule
      //     });

      //     return foundItem && foundItem.unreadNotificationCount;
      //   }
      // }


      // code to refer ends

      // const modifiedOfferList = state.data.offeringList

      // for (let i = 0; i < modifiedOfferList.length; i++) {
      //   if (modifiedOfferList[i].homePageConfigrationName == state.curentModule) {
      //     modifiedOfferList[i].unreadNotificationCount = modifiedOfferList[i].unreadNotificationCount - 1;
      //      regularOferringList = true;

      //   }
      // }
      // return {
      //   ...state,
      //   data: {
      //     ...state.data,
      //     offeringList: modifiedOfferList

      //   }
      // }

      //unreadNotificationCount: state.data.offeringList[i].unreadNotificationCount - 1

      //  if (state.data.myUnreadNotificationCount > 0) {
      //   return {
      //     ...state,
      //     data: {
      //       ...state.data,
      //       myUnreadNotificationCount: state.data.myUnreadNotificationCount - 1
      //     }
      //   }
      // } 

    }
    case home.CLEAR_ALL_COUNT: {

      let regularOferringList = false;
      let mostUserOfferings = false;
      let mostUsedModifiedOfferList;
      let modifiedOfferList;

      const mostUsedOfferingsList = state.data.mostUsedOfferingList;
      const regularOfferingList = state.data.offeringList;

      for (let i = 0; i < regularOfferingList.length; i++) {
        if (state.curentModule == regularOfferingList[i].homePageConfigrationName) {
          regularOferringList = true;
        }
      }

      if (regularOferringList) {

        modifiedOfferList = state.data.offeringList

        for (let i = 0; i < modifiedOfferList.length; i++) {
          if (modifiedOfferList[i].homePageConfigrationName == state.curentModule) {
            modifiedOfferList[i].unreadNotificationCount = 0;
            regularOferringList = true;
          }
        }
        return {
          ...state,
          data: {
            ...state.data,
            offeringList: modifiedOfferList
          }
        }
      }

      if (!regularOferringList) {
        for (let i = 0; i < mostUsedOfferingsList.length; i++) {
          if (state.curentModule == mostUsedOfferingsList[i].homePageConfigrationName) {
            mostUserOfferings = true;
          }
        }

      }

      if (mostUserOfferings) {

        mostUsedModifiedOfferList = state.data.mostUsedOfferingList

        for (let i = 0; i < mostUsedModifiedOfferList.length; i++) {
          if (mostUsedModifiedOfferList[i].homePageConfigrationName == state.curentModule) {
            mostUsedModifiedOfferList[i].unreadNotificationCount = 0;
            mostUserOfferings = true;
          }
        }

      }
      /* const modifiedOfferList = state.data.offeringList

      for (let i = 0; i < modifiedOfferList.length; i++) {
        if (modifiedOfferList[i].homePageConfigrationName == state.curentModule) {
          modifiedOfferList[i].unreadNotificationCount = 0;
        }
      }
      return {
        ...state,
        data: {
          ...state.data,
          offeringList: modifiedOfferList
        }
      } */
      return {
        ...state,
        data: {
          ...state.data,
          mostUsedOfferingList: mostUsedModifiedOfferList ? mostUsedModifiedOfferList : state.data.mostUsedOfferingList,

          offeringList: modifiedOfferList ? modifiedOfferList : state.data.offeringList
        }
      }
    }

    case home.SET_CURRENT_MODULE: {
      return {
        ...state,
        curentModule: action.payload
      }
    }

    case home.RESET_HOME_DATA: {
      return {
        data: null,
        pending: false,
        error: null,
        curentModule: null
      }

    }
  }
  return state;
}

export const getMiscData = (state: homeState) => state.data;
export const getMiscLoading = (state: homeState) => state.pending;
export const getCurrentModule = (state: homeState) => state.curentModule;

export const getNotificationCount = (state: homeState) => {

  let regularOferringList = false;
  let mostUserOfferings = false;

  if (state && state.data) {
    const mostUsedOfferingsList = state.data.mostUsedOfferingList;
    const regularOfferingList = state.data.offeringList;

    for (let i = 0; i < regularOfferingList.length; i++) {
      if (state.curentModule == regularOfferingList[i].homePageConfigrationName) {
        regularOferringList = true;
      }
    }

    if (regularOferringList) {
      if (state.data) {
        const offeringList = state.data.offeringList;
        let foundItem = offeringList.find((item) => {
          return item.homePageConfigrationName == state.curentModule
        });
        return foundItem && foundItem.unreadNotificationCount;
      }
    }

    if (!regularOferringList && mostUsedOfferingsList) {
      for (let i = 0; i < mostUsedOfferingsList.length; i++) {
        if (state.curentModule == mostUsedOfferingsList[i].homePageConfigrationName) {
          mostUserOfferings = true;
        }
      }
    }

    if (mostUserOfferings) {
      if (state.data) {
        const offeringList = state.data.mostUsedOfferingList;
        let foundItem = offeringList.find((item) => {
          return item.homePageConfigrationName == state.curentModule
        });
        return foundItem && foundItem.unreadNotificationCount;
      }
    }
  }
}