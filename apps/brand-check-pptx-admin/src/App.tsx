import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PresentationList } from "./presentation/PresentationList";
import { PresentationCreate } from "./presentation/PresentationCreate";
import { PresentationEdit } from "./presentation/PresentationEdit";
import { PresentationShow } from "./presentation/PresentationShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { BrandRuleList } from "./brandRule/BrandRuleList";
import { BrandRuleCreate } from "./brandRule/BrandRuleCreate";
import { BrandRuleEdit } from "./brandRule/BrandRuleEdit";
import { BrandRuleShow } from "./brandRule/BrandRuleShow";
import { BrandInstanceList } from "./brandInstance/BrandInstanceList";
import { BrandInstanceCreate } from "./brandInstance/BrandInstanceCreate";
import { BrandInstanceEdit } from "./brandInstance/BrandInstanceEdit";
import { BrandInstanceShow } from "./brandInstance/BrandInstanceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"brand-check-pptx"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Presentation"
          list={PresentationList}
          edit={PresentationEdit}
          create={PresentationCreate}
          show={PresentationShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="BrandRule"
          list={BrandRuleList}
          edit={BrandRuleEdit}
          create={BrandRuleCreate}
          show={BrandRuleShow}
        />
        <Resource
          name="BrandInstance"
          list={BrandInstanceList}
          edit={BrandInstanceEdit}
          create={BrandInstanceCreate}
          show={BrandInstanceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
