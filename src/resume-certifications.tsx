import { FileBadge } from "lucide-react";

export default function ResumeCertifications() {
  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FileBadge className="text-blue-600" size={24} />
        Certificados
      </h3>

      <div className="border-l-4 border-red-500 pl-6 mb-8">
        <h5 className="text-lg font-semibold text-gray-800 mb-2">
          Alura - Devops 154h
        </h5>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Docker: Criando containers sem dor de cabeça (de 06/02/2021 a 09/02/2021) 10h</li>
          <li>Ansible: sua infraestrutura como código (de 10/03/2021 a 14/10/2021) 12h</li>
          <li>Jenkins e Docker: Pipeline de entrega continua (de 18/08/2021 a 29/09/2021) 12h</li>
          <li>Vagrant: gerenciando máquinas virtuais (de 26/02/2021 a 10/03/2021) 12h</li>
          <li>Gitlab CI e Docker: Pipeline de entrega contínua (de 17/02/2022 a 14/07/2022) 8h</li>
          <li>Grafana e Telegraf: Monitoramento em tempo real (de 06/08/2021 a 18/08/2021) 10h</li>
          <li>Docker Swarm: Orquestrador de containers (de 09/02/2021 a 14/02/2021) 12h</li>
          <li>Integração Contínua: mais qualidade e menos risco no desenvolvimento (de 16/02/2021 a 16/02/2021) 6h</li>
          <li>Entrega Contínua: confiabilidade e qualidade na implantação de software (de 18/08/2021 a 28/09/2021) 8h</li>
          <li>Kubernetes: Pods, Services e ConfigMaps (de 05/10/2021 a 02/08/2022) 8h</li>
          <li>Infraestrutura como código: preparando máquinas na AWS com Ansible e Terraform (de 12/04/2025 a 15/04/2025) 12h</li>
          <li>Infraestrutura como código: separando ambientes na AWS com Ansible e Terraform (de 15/04/2025 a 16/04/2025) 12h</li>
          <li>Docker: criando e gerenciando containers (de 18/07/2022 a 19/07/2022) 10h</li>
          <li>Amazon S3: manipule e armazene objetos na nuvem (de 21/01/2025 a 20/02/2025) 8h</li>
          <li>Amazon Lightsail: descomplicando a nuvem (de 10/11/2024 a 10/11/2024) 8h</li>
          <li>Amazon EC2: alta disponibilidade e escalabilidade em uma aplicação (de 10/11/2024 a 10/11/2024) 8h</li>
          <li>AWS: entendendo e controlando os custos dos serviços (de 25/02/2025 a 25/02/2025) 6h</li>
        </ul>
      </div>

      <div className="border-l-4 border-yellow-500 pl-6">
        <h5 className="text-lg font-semibold text-gray-800 mb-2">
          Alura - Inovação & Gestão - 24h
        </h5>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Hábitos: da produtividade às metas pessoais (de 09/02/2021 a 29/03/2021) 8h</li>
          <li>Comunicação: como se expressar bem e ser compreendido (de 24/08/2024 a 20/10/2024) 8h</li>
          <li>Comunicação não violenta: consciência para agir (de 08/11/2022 a 23/08/2024) 8h</li>
        </ul>
      </div>
    </section>
  )
}