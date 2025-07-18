import { ISupervisorPort } from "@/features/application/ports/ISupervisorPort"
import { Supervisor } from "../../entities/Supervisor"

export class GetSupervisorsUseCase {
  static execute() {
    throw new Error("Method not implemented.")
  }
  constructor(private readonly supervisorPort: ISupervisorPort) {}

  async execute(): Promise<Supervisor[]> {
    return this.supervisorPort.getSupervisors()
  }
} 