import { useMutation } from "@tanstack/react-query";

import { EImzoServerApi } from "@/services/api";

const useGetEImzoServerChallengeMutation = () => useMutation((b: any) => EImzoServerApi.get(`/challenge`));

export default useGetEImzoServerChallengeMutation;
