import type {
	AllProductsResponse,
	AllProductsInput,
	AllProductsResponseData,
	ProductByIDResponse,
	ProductByIDInput,
	ProductByIDResponseData,
} from "./models";
import { createContext } from "react";
import { hooks, WunderGraphContextProperties } from "@wundergraph/nextjs";
import type { QueryArgsWithInput, SubscriptionArgs, SubscriptionArgsWithInput } from "@wundergraph/nextjs";
export type Role = "admin" | "user";

export enum AuthProvider {
	"github" = "github",
}

export const AuthProviders = {
	github: AuthProvider.github,
};

const defaultWunderGraphContextProperties: WunderGraphContextProperties<Role> = {
	ssrCache: {},
	client: null,
	clientConfig: {
		applicationHash: "346cc36d",
		applicationPath: "app/main",
		baseURL: "http://localhost:9991",
		sdkVersion: "0.116.1",
	},
	authenticationEnabled: true,
	user: null,
	setUser: (value) => {},
	isWindowFocused: "pristine",
	setIsWindowFocused: (value) => {},
	refetchMountedOperations: 0,
	setRefetchMountedOperations: (value) => {},
};

export const WunderGraphContext = createContext<WunderGraphContextProperties<Role>>(
	defaultWunderGraphContextProperties
);

export const withWunderGraph = hooks.withWunderGraphContextWrapper(
	WunderGraphContext,
	defaultWunderGraphContextProperties
);

export const useWunderGraph = hooks.useWunderGraph<Role, AuthProvider>(WunderGraphContext);

export const useQuery = {
	AllProducts: (args: QueryArgsWithInput<AllProductsInput>) =>
		hooks.useQueryWithInput<AllProductsInput, AllProductsResponseData, Role>(WunderGraphContext, {
			operationName: "AllProducts",
			requiresAuthentication: false,
		})(args),
	ProductByID: (args: QueryArgsWithInput<ProductByIDInput>) =>
		hooks.useQueryWithInput<ProductByIDInput, ProductByIDResponseData, Role>(WunderGraphContext, {
			operationName: "ProductByID",
			requiresAuthentication: false,
		})(args),
};

export const useMutation = {};

export const useSubscription = {};

export const useLiveQuery = {
	AllProducts: (args: SubscriptionArgsWithInput<AllProductsInput>) =>
		hooks.useSubscriptionWithInput<AllProductsInput, AllProductsResponseData, Role>(WunderGraphContext, {
			operationName: "AllProducts",
			requiresAuthentication: false,
			liveQuery: true,
		})(args),
	ProductByID: (args: SubscriptionArgsWithInput<ProductByIDInput>) =>
		hooks.useSubscriptionWithInput<ProductByIDInput, ProductByIDResponseData, Role>(WunderGraphContext, {
			operationName: "ProductByID",
			requiresAuthentication: false,
			liveQuery: true,
		})(args),
};
