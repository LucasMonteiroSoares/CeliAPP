<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('produtos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->constrained('users')->onDelete('restrict');
            $table->foreignId('categoria_id')->nullable()->constrained('categorias')->onDelete('set null');
            $table->string('nome');
            $table->string('slug')->unique();
            $table->string('marca', 100)->nullable();
            $table->text('descricao')->nullable();
            $table->string('url_da_imagem')->nullable();
            $table->string('situacao')->default('rascunho'); // rascunho, publicado, arquivado
            $table->timestamps();
            $table->softDeletes();

            $table->index('situacao');
            $table->fullText(['nome', 'descricao', 'marca']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('produtos');
    }
};
