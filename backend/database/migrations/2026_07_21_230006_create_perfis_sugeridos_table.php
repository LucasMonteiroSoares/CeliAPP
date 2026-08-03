<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('perfis_sugeridos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->constrained('users')->onDelete('restrict');
            $table->foreignId('categoria_id')->nullable()->constrained('categorias')->onDelete('set null');
            $table->string('nome');
            $table->string('slug')->unique();
            $table->string('tipo_de_perfil')->default('outro'); // influenciador, medico, nutricionista, outro
            $table->text('biografia')->nullable();
            $table->json('redes_sociais')->nullable();
            $table->string('url_da_foto')->nullable();
            $table->boolean('verificado')->default(false);
            $table->string('situacao')->default('rascunho'); // rascunho, publicado, arquivado
            $table->timestamps();
            $table->softDeletes();

            $table->index('situacao');
            $table->index('tipo_de_perfil');
            $table->fullText(['nome', 'biografia']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('perfis_sugeridos');
    }
};
