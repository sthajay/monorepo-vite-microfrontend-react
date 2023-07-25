import * as React from "react";
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
  Navbar,
  UnstyledButton,
  Group,
  Text,
} from "@mantine/core";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
import { useStore } from "store";

export type Route = {
  element: React.FunctionComponent;
  path: string;
};

export type NavLink = {
  label: string;
  path: string;
};

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    hasError: boolean;
  }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <>Error</>;
    }

    return this.props.children;
  }
}

function MainLink({ label, path }: NavLink) {
  return (
    <Link to={path}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export const AppShell: React.FunctionComponent<{
  title: string;
  colorScheme?: "light" | "dark";
  routes: Route[];
  navLinks: NavLink[];
}> = ({ colorScheme, routes, title, navLinks }) => {
  const { movies } = useStore();

  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <MantineAppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="xs">
              {navLinks.map((link) => (
                <MainLink {...link} key={link.path} />
              ))}
            </Navbar>
          }
          header={
            <Header
              height={60}
              p="xs"
              sx={{ display: "flex" }}
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}
            >
              <Title sx={{ flexGrow: 1 }}>{title}</Title>
              <Text size="xl">{movies.length} selected</Text>
            </Header>
          }
        >
          <React.Suspense fallback={<>Loading...</>}>
          <Routes>
            {routes.map((route) => {
              return <Route
              key={route.path}
              path={route.path}
              element={<ErrorBoundary><React.Suspense fallback="loading"><route.element /></React.Suspense></ErrorBoundary>}
            />
            })}
          </Routes>
          </React.Suspense>
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
