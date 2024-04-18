import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SearchContainer } from "./RepositoriesSection.styles";

interface RepositoriesSearchProps {
  totalReposCount: number;
  onChangeSearchTerms: (searchTerms: string) => void;
}

const searchFormSechema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSechema>;

export function RepositoriesSearch({
  totalReposCount,
  onChangeSearchTerms,
}: RepositoriesSearchProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSechema),
  });

  async function handleSearchChange(data: SearchFormInputs) {
    onChangeSearchTerms(data.query);
  }

  return (
    <SearchContainer>
      <div className="search-header">
        <h3>Repositórios</h3>
        <span>{`${totalReposCount} repositórios`}</span>
      </div>
      <form onSubmit={handleSubmit(handleSearchChange)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
        <button type="submit" disabled={isSubmitting}>
          Buscar
        </button>
      </form>
    </SearchContainer>
  );
}
