# NestJS Project AI Guidance

## Architecture Overview
This is a **NestJS starter project** following the framework's modular, decorator-driven architecture:
- **Modules**: Root module (`AppModule`) imports controllers and providers. Each feature should be a separate module.
- **Controllers**: HTTP endpoints decorated with `@Controller()` and `@Get()`, `@Post()`, etc. Use dependency injection via constructor.
- **Services**: Business logic marked with `@Injectable()`, used as providers in modules.
- **Bootstrap**: Server starts at `src/main.ts` via `NestFactory.create(AppModule)` listening on port 3000 (configurable via `PORT` env var).

## Project Structure
```
src/
  main.ts              # Application entry point
  app.module.ts        # Root module wiring controllers + providers
  app.controller.ts    # HTTP handlers
  app.service.ts       # Business logic
test/
  app.e2e-spec.ts      # End-to-end tests using supertest
```

## Development Workflows

### Build & Run
- **Development**: `npm run start:dev` (watch mode with hot reload)
- **Production**: `npm run build` then `npm run start:prod`
- **Debug**: `npm run start:debug` (Node inspector + watch mode)

### Testing
- **Unit tests**: `npm run test` (Jest, `*.spec.ts` files in `src/`)
- **E2E tests**: `npm run test:e2e` (uses `test/jest-e2e.json`)
- **Coverage**: `npm run test:cov`
- **Watch mode**: `npm run test:watch`

### Code Quality
- **Lint & fix**: `npm run lint` (ESLint with auto-fix enabled)
- **Format**: `npm run format` (Prettier on `src/` and `test/`)

## Key Patterns

### Testing Pattern
Unit tests use `Test.createTestingModule()` to manually compile modules. Example:
```typescript
const app: TestingModule = await Test.createTestingModule({
  controllers: [AppController],
  providers: [AppService],
}).compile();
```
E2E tests import the full `AppModule` and test HTTP endpoints with supertest.

### Dependency Injection
Always inject dependencies via constructor with `private readonly` to keep them isolated:
```typescript
export class AppController {
  constructor(private readonly appService: AppService) {}
}
```

## Configuration & Setup
- **TypeScript 5.3+**: Targets ES2023, strict null checks enabled, decorator metadata emitted
- **Framework**: NestJS 11.0+, Express platform by default
- **Testing**: Jest 30+ with ts-jest
- **Compilation**: `nest build` clears output directory by default (via `nest-cli.json`)
- **Imports**: Use explicit imports (e.g., `@nestjs/common`, not wildcard imports)

## Common AI Tasks
- **Adding features**: Create new module files, add routes to controller, implement services, add tests
- **Debugging errors**: Check `src/main.ts` bootstrap for setup issues; inspect decorator usage
- **Refactoring**: Extract logic into separate services; use modules to organize features
