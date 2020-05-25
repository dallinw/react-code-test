import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import { Store } from "redux";
import { Provider } from "react-redux";
import store, { RootState } from "./redux";
import { act } from "react-dom/test-utils";

interface ProviderTypes {
  reduxStore: Store<RootState>;
  children: React.ReactNode;
}

const ReduxProvider: React.FunctionComponent<ProviderTypes> = ({
  reduxStore,
  children,
}: ProviderTypes) => <Provider store={reduxStore}>{children}</Provider>;

test("initially renders loading page, then unmounts it", async () => {
  const app = render(
    <ReduxProvider reduxStore={store}>
      <App />
    </ReduxProvider>
  );
  const loadingParent = app.getByTestId("#loading");
  expect(loadingParent).toBeInTheDocument();
  waitForElementToBeRemoved(app.getByTestId("#loading")).then(() =>
    console.log("unmounted loading page")
  );
});

test("scrolling to bottom of users container loads additional users", async () => {
  const app = render(
    <ReduxProvider reduxStore={store}>
      <App />
    </ReduxProvider>
  );

  // wait for loading animation to complete
  await waitFor(() => {
    expect(app.getByTestId("#usersList")).toBeInTheDocument();
  });
  const usersParent = app.getByTestId("#usersList");

  // wait for users to be loaded
  await waitFor(() => {
    expect(app.getAllByTestId("#user").length).toBeGreaterThan(0);
  });
  const numberBeforeScroll = app.getAllByTestId("#user").length;

  // scroll parent
  act(() => {
    fireEvent.scroll(usersParent, {
      target: { scrollY: usersParent.clientHeight },
    });
  });

  // wait for users to load again and expect the count to be larger
  await waitFor(() => {
    expect(app.getAllByTestId("#user").length).toBeGreaterThan(
      numberBeforeScroll
    );
  });
});
